/**
 * INTERNSHIP MANAGEMENT PORTAL - COMPANY MODULE
 * Company Dashboard, Post Internship, My Internships, Company Profile, Settings
 */

document.addEventListener('DOMContentLoaded', () => {
  // Company Dashboard
  if (document.getElementById('company-dashboard-container')) {
    initCompanyDashboard();
  }

  // Post Internship Form
  if (document.getElementById('post-internship-form')) {
    initPostInternshipForm();
  }

  // My Internships Management
  if (document.getElementById('my-internships-container')) {
    initMyInternships();
  }

  // Company Profile View
  if (document.getElementById('company-profile-container')) {
    initCompanyProfileView();
  }

  // Company Edit Profile Form
  if (document.getElementById('edit-company-form')) {
    initCompanyEditProfile();
  }

  // Company Settings
  if (document.getElementById('company-settings-form')) {
    initCompanySettings();
  }
});

/**
 * Initialize Company Dashboard
 */
function initCompanyDashboard() {
  const company = DB.getCompanyProfile();
  const allInternships = DB.getInternships().filter(i => i.company === company.name || i.company === "TechNova Solutions");
  const applicants = DB.getCompanyApplicants();
  const interviews = DB.getInterviews().filter(i => i.company === company.name || i.company === "TechNova Solutions");

  // Greet company
  const compNameEl = document.getElementById('dashboard-company-name');
  if (compNameEl) compNameEl.textContent = company.name;

  // Stats calculation
  const totalInternships = allInternships.length;
  const activeInternships = allInternships.filter(i => new Date(i.deadline) >= new Date()).length;
  const totalApplicants = applicants.length;
  const shortlisted = applicants.filter(a => a.status === 'Shortlisted').length;
  const interviewCount = applicants.filter(a => a.status === 'Interview').length;
  const selected = applicants.filter(a => a.status === 'Selected').length;

  document.getElementById('cstat-total-jobs').textContent = totalInternships;
  document.getElementById('cstat-active-jobs').textContent = activeInternships;
  document.getElementById('cstat-applicants').textContent = totalApplicants;
  document.getElementById('cstat-shortlisted').textContent = shortlisted;
  document.getElementById('cstat-interviews').textContent = interviewCount;
  document.getElementById('cstat-selected').textContent = selected;

  // Render Charts
  renderCompanyCharts(applicants);

  // Render Recent Applicants List
  const recentApplicantsContainer = document.getElementById('dashboard-recent-applicants');
  if (recentApplicantsContainer) {
    const recent = applicants.slice(0, 4);
    recentApplicantsContainer.innerHTML = recent.map(app => `
      <div class="flex items-center justify-between p-3.5 rounded-xl border border-slate-100 dark:border-slate-700/60 bg-slate-50/50 dark:bg-slate-700/30">
        <div class="flex items-center gap-3">
          <img src="${app.studentPhoto}" alt="${app.studentName}" class="w-10 h-10 rounded-xl object-cover" />
          <div>
            <h4 class="font-bold text-sm text-slate-900 dark:text-white line-clamp-1">
              <a href="applicant-details.html?id=${app.id}" class="hover:text-indigo-600">${app.studentName}</a>
            </h4>
            <p class="text-xs text-slate-500 dark:text-slate-400">For: ${app.jobTitle} • CGPA: ${app.studentCgpa}</p>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300">
            ${app.status}
          </span>
          <a href="applicant-details.html?id=${app.id}" class="p-1.5 text-slate-400 hover:text-indigo-600">
            <i class="fa-solid fa-chevron-right text-xs"></i>
          </a>
        </div>
      </div>
    `).join('');
  }

  // Render Active Job Posts
  const activeJobsContainer = document.getElementById('dashboard-active-jobs');
  if (activeJobsContainer) {
    activeJobsContainer.innerHTML = allInternships.slice(0, 3).map(job => `
      <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
        <div class="flex items-center justify-between mb-1.5">
          <h4 class="font-bold text-sm text-slate-900 dark:text-white hover:text-indigo-600">
            <a href="internship-details.html?id=${job.id}">${job.title}</a>
          </h4>
          <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/50">Active</span>
        </div>
        <p class="text-xs text-slate-500 dark:text-slate-400 mb-3">${job.category} • Deadline: ${job.deadline}</p>
        <div class="flex items-center justify-between text-xs pt-2 border-t border-slate-100 dark:border-slate-700">
          <span class="text-slate-500"><i class="fa-solid fa-users text-indigo-500 mr-1"></i> ${applicants.filter(a => a.jobTitle === job.title).length} Applicants</span>
          <a href="applicants.html" class="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">Review &rarr;</a>
        </div>
      </div>
    `).join('');
  }
}

function renderCompanyCharts(applicants) {
  const barCanvas = document.getElementById('companyApplicationsChart');
  const pieCanvas = document.getElementById('companyStatusChart');
  if (typeof Chart === 'undefined') return;

  const isDark = document.documentElement.classList.contains('dark');
  const textColor = isDark ? '#cbd5e1' : '#475569';
  const gridColor = isDark ? '#334155' : '#f1f5f9';

  // Applications trend
  if (barCanvas) {
    new Chart(barCanvas, {
      type: 'bar',
      data: {
        labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep (Est)'],
        datasets: [{
          label: 'Applications Received',
          data: [14, 28, 45, 62, 75],
          backgroundColor: '#4f46e5',
          borderRadius: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: { grid: { display: false }, ticks: { color: textColor } },
          y: { grid: { color: gridColor }, ticks: { color: textColor } }
        }
      }
    });
  }

  // Status Distribution
  if (pieCanvas) {
    const counts = {
      Applied: applicants.filter(a => a.status === 'Applied').length,
      Shortlisted: applicants.filter(a => a.status === 'Shortlisted').length,
      Interview: applicants.filter(a => a.status === 'Interview').length,
      Selected: applicants.filter(a => a.status === 'Selected').length,
      Rejected: applicants.filter(a => a.status === 'Rejected').length
    };

    new Chart(pieCanvas, {
      type: 'doughnut',
      data: {
        labels: ['Applied', 'Shortlisted', 'Interview', 'Selected', 'Rejected'],
        datasets: [{
          data: [counts.Applied || 1, counts.Shortlisted || 1, counts.Interview || 1, counts.Selected || 1, counts.Rejected || 1],
          backgroundColor: ['#3b82f6', '#f59e0b', '#6366f1', '#10b981', '#f43f5e'],
          borderColor: isDark ? '#1e293b' : '#ffffff',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: { font: { size: 11 }, color: textColor }
          }
        },
        cutout: '70%'
      }
    });
  }
}

/**
 * Initialize Post Internship Form
 */
function initPostInternshipForm() {
  const form = document.getElementById('post-internship-form');
  const previewBtn = document.getElementById('preview-internship-btn');
  const draftBtn = document.getElementById('save-draft-btn');

  // Character counters
  const descInput = document.getElementById('post-desc');
  const descCount = document.getElementById('desc-char-count');
  if (descInput && descCount) {
    descInput.addEventListener('input', () => {
      descCount.textContent = `${descInput.value.length} / 1000`;
    });
  }

  // Submit Handler
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    saveAndPublishInternship(false);
  });

  if (draftBtn) {
    draftBtn.addEventListener('click', () => {
      saveAndPublishInternship(true);
    });
  }
}

function saveAndPublishInternship(isDraft = false) {
  const company = DB.getCompanyProfile();

  const title = document.getElementById('post-title').value.trim();
  const category = document.getElementById('post-category').value;
  const department = document.getElementById('post-dept').value.trim();
  const openings = parseInt(document.getElementById('post-openings').value) || 1;
  const location = document.getElementById('post-location').value.trim();
  const workMode = document.getElementById('post-workmode').value;
  const duration = document.getElementById('post-duration').value;
  const type = document.getElementById('post-type').value;
  const stipendAmount = parseInt(document.getElementById('post-stipend').value) || 20000;
  const deadline = document.getElementById('post-deadline').value;
  const skills = document.getElementById('post-skills').value.split(',').map(s => s.trim()).filter(Boolean);
  const desc = document.getElementById('post-desc').value.trim();
  const responsibilities = document.getElementById('post-responsibilities').value.split('\n').filter(Boolean);
  const qualifications = document.getElementById('post-qualifications').value.split('\n').filter(Boolean);

  const benefitsChecked = Array.from(document.querySelectorAll('input[name="benefits"]:checked')).map(cb => cb.value);

  const newInternship = {
    id: `int-${Date.now()}`,
    title: title,
    company: company.name,
    logo: company.logo,
    category: category,
    department: department || "Engineering",
    location: location,
    workMode: workMode,
    type: type,
    duration: duration,
    stipend: `৳ ${stipendAmount.toLocaleString()} / month`,
    stipendAmount: stipendAmount,
    openings: openings,
    postedDate: new Date().toISOString().split('T')[0],
    deadline: deadline,
    skills: skills,
    featured: true,
    description: desc,
    responsibilities: responsibilities.length ? responsibilities : ["Collaborate on feature design", "Write clean, tested code", "Participate in agile ceremonies"],
    qualifications: qualifications.length ? qualifications : ["Enrolled in B.Sc in CSE / Software Engineering", "Solid algorithmic foundations"],
    preferredSkills: ["Git", "Communication", "Problem Solving"],
    benefits: benefitsChecked.length ? benefitsChecked : ["Certificate of Completion", "Flexible hours", "Mentorship"],
    companyInfo: {
      name: company.name,
      industry: company.industry,
      size: company.companySize,
      website: company.website,
      email: company.email,
      location: company.location,
      about: company.description
    }
  };

  const list = DB.getInternships();
  list.unshift(newInternship);
  DB.saveInternships(list);

  // Create notification
  const notifs = DB.getNotifications();
  notifs.unshift({
    id: `notif-${Date.now()}`,
    target: "company",
    title: isDraft ? "Draft Saved" : "Internship Published Live 🚀",
    message: `Your position '${title}' is now ${isDraft ? 'saved as draft' : 'accepting student applications'}.`,
    date: new Date().toLocaleString(),
    read: false,
    type: "post",
    link: "pages/company/my-internships.html"
  });
  DB.saveNotifications(notifs);

  showToast(isDraft ? 'Internship draft saved!' : 'Internship posted successfully! 🎉', 'success');
  setTimeout(() => {
    window.location.href = 'my-internships.html';
  }, 1000);
}

/**
 * Initialize My Internships List
 */
function initMyInternships() {
  const container = document.getElementById('my-internships-container');
  if (!container) return;

  const company = DB.getCompanyProfile();
  const list = DB.getInternships().filter(i => i.company === company.name || i.company === "TechNova Solutions");
  const applicants = DB.getCompanyApplicants();

  const countBadge = document.getElementById('my-internships-count');
  if (countBadge) countBadge.textContent = `${list.length} Internships Posted`;

  if (list.length === 0) {
    container.innerHTML = `
      <div class="py-16 text-center bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-8">
        <h3 class="text-xl font-bold text-slate-800 dark:text-white mb-2">No Internships Posted Yet</h3>
        <p class="text-slate-500 dark:text-slate-400 text-sm max-w-md mx-auto mb-6">Create your first internship posting to start receiving applications from top CSE students.</p>
        <a href="post-internship.html" class="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-semibold transition">
          + Post an Internship
        </a>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(item => {
    const jobApplicants = applicants.filter(a => a.jobTitle === item.title || a.internshipId === item.id);
    return `
      <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 hover-card-lift shadow-sm mb-4">
        <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <div class="flex items-center gap-3 flex-wrap">
              <h3 class="font-bold text-lg text-slate-900 dark:text-white hover:text-indigo-600">
                <a href="internship-details.html?id=${item.id}">${item.title}</a>
              </h3>
              <span class="px-2.5 py-0.5 text-xs font-bold rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-400">
                Active
              </span>
            </div>

            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-3">
              <span><i class="fa-regular fa-folder text-indigo-500 mr-1"></i>${item.category}</span>
              <span>•</span>
              <span><i class="fa-solid fa-location-dot text-rose-500 mr-1"></i>${item.location} (${item.workMode})</span>
              <span>•</span>
              <span><i class="fa-regular fa-clock text-purple-500 mr-1"></i>Deadline: ${item.deadline}</span>
            </p>

            <div class="flex items-center gap-6 mt-3 text-xs font-semibold text-slate-600 dark:text-slate-300">
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-users text-indigo-500"></i> ${jobApplicants.length} Total Applicants</span>
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-user-check text-emerald-500"></i> ${jobApplicants.filter(a => a.status === 'Shortlisted').length} Shortlisted</span>
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-sack-dollar text-amber-500"></i> ${item.stipend}</span>
            </div>
          </div>

          <!-- Actions -->
          <div class="flex items-center gap-2.5 w-full lg:w-auto justify-end pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-100 dark:border-slate-700">
            <a href="applicants.html" class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-sm transition flex items-center gap-1.5">
              <i class="fa-solid fa-users"></i> Applicants (${jobApplicants.length})
            </a>
            <a href="internship-details.html?id=${item.id}" class="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold transition">
              View
            </a>
            <button onclick="handleDeleteInternship('${item.id}')" class="px-3 py-2 rounded-xl border border-rose-200 dark:border-rose-900/60 text-rose-600 dark:text-rose-400 hover:bg-rose-50 text-xs font-semibold transition" title="Delete Post">
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function handleDeleteInternship(id) {
  if (confirm('Are you sure you want to delete this internship posting?')) {
    let list = DB.getInternships();
    list = list.filter(i => i.id !== id);
    DB.saveInternships(list);
    showToast('Internship post removed', 'info');
    initMyInternships();
  }
}

/**
 * Initialize Company Profile View
 */
function initCompanyProfileView() {
  const company = DB.getCompanyProfile();

  document.getElementById('cprofile-name').textContent = company.name;
  document.getElementById('cprofile-tagline').textContent = company.tagline;
  document.getElementById('cprofile-industry').textContent = company.industry;
  document.getElementById('cprofile-size').textContent = company.companySize;
  document.getElementById('cprofile-website').textContent = company.website.replace('https://', '');
  document.getElementById('cprofile-website').href = company.website;
  document.getElementById('cprofile-email').textContent = company.email;
  document.getElementById('cprofile-phone').textContent = company.phone;
  document.getElementById('cprofile-location').textContent = company.location;
  document.getElementById('cprofile-hr-name').textContent = company.hrName;
  document.getElementById('cprofile-hr-email').textContent = company.hrEmail;
  document.getElementById('cprofile-desc').textContent = company.description;
  document.getElementById('cprofile-logo').src = company.logo;

  // Render Posted Internships snippet
  const listContainer = document.getElementById('company-openings-list');
  if (listContainer) {
    const list = DB.getInternships().filter(i => i.company === company.name || i.company === "TechNova Solutions");
    listContainer.innerHTML = list.map(item => `
      <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-700/30 flex items-center justify-between">
        <div>
          <h4 class="font-bold text-sm text-slate-900 dark:text-white">${item.title}</h4>
          <p class="text-xs text-slate-500">${item.category} • ${item.location} (${item.workMode}) • ${item.stipend}</p>
        </div>
        <a href="internship-details.html?id=${item.id}" class="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">Details &rarr;</a>
      </div>
    `).join('');
  }
}

/**
 * Initialize Company Edit Profile Form
 */
function initCompanyEditProfile() {
  const form = document.getElementById('edit-company-form');
  const company = DB.getCompanyProfile();

  document.getElementById('edit-cname').value = company.name || '';
  document.getElementById('edit-tagline').value = company.tagline || '';
  document.getElementById('edit-industry').value = company.industry || '';
  document.getElementById('edit-size').value = company.companySize || '';
  document.getElementById('edit-website').value = company.website || '';
  document.getElementById('edit-email').value = company.email || '';
  document.getElementById('edit-phone').value = company.phone || '';
  document.getElementById('edit-location').value = company.location || '';
  document.getElementById('edit-hr-name').value = company.hrName || '';
  document.getElementById('edit-hr-email').value = company.hrEmail || '';
  document.getElementById('edit-hr-phone').value = company.hrPhone || '';
  document.getElementById('edit-desc').value = company.description || '';
  document.getElementById('edit-logo-url').value = company.logo || '';

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const updated = {
      ...company,
      name: document.getElementById('edit-cname').value.trim(),
      tagline: document.getElementById('edit-tagline').value.trim(),
      industry: document.getElementById('edit-industry').value.trim(),
      companySize: document.getElementById('edit-size').value.trim(),
      website: document.getElementById('edit-website').value.trim(),
      email: document.getElementById('edit-email').value.trim(),
      phone: document.getElementById('edit-phone').value.trim(),
      location: document.getElementById('edit-location').value.trim(),
      hrName: document.getElementById('edit-hr-name').value.trim(),
      hrEmail: document.getElementById('edit-hr-email').value.trim(),
      hrPhone: document.getElementById('edit-hr-phone').value.trim(),
      description: document.getElementById('edit-desc').value.trim(),
      logo: document.getElementById('edit-logo-url').value.trim() || company.logo
    };

    DB.saveCompanyProfile(updated);
    showToast('Company profile updated successfully!', 'success');
    setTimeout(() => {
      window.location.href = 'profile.html';
    }, 800);
  });
}

/**
 * Initialize Company Settings
 */
function initCompanySettings() {
  const form = document.getElementById('company-settings-form');
  const company = DB.getCompanyProfile();

  document.getElementById('csettings-name').value = company.name || '';
  document.getElementById('csettings-email').value = company.email || '';
  document.getElementById('csettings-phone').value = company.phone || '';

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    company.name = document.getElementById('csettings-name').value.trim();
    company.email = document.getElementById('csettings-email').value.trim();
    company.phone = document.getElementById('csettings-phone').value.trim();
    DB.saveCompanyProfile(company);
    showToast('Company settings saved!', 'success');
  });
}
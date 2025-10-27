import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.logo}>Finance</h1>
          <div className={styles.headerButtons}>
            <button className={`${styles.btn} ${styles.btnOutline}`}>
              Log In
            </button>
            <button className={`${styles.btn} ${styles.btnPrimary}`}>
              Register
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h2 className={styles.heroTitle}>Manage Your Finances</h2>
          <p className={styles.heroSubtitle}>
            Track your expenses, set budgets, and achieve your financial goals.
          </p>
          <div className={styles.heroButtons}>
            <button
              className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLarge}`}
            >
              Log In
            </button>
            <button
              className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLarge}`}
            >
              Register
            </button>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className={styles.dashboard}>
        <div className={styles.dashboardGrid}>
          {/* Overview Card */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Overview</h3>
            <div className={styles.metrics}>
              <div className={styles.metric}>
                <span className={styles.metricLabel}>Total Budget</span>
                <span className={styles.metricValue}>$10,000</span>
              </div>
              <div className={styles.metric}>
                <span className={styles.metricLabel}>Total Expenses</span>
                <span className={styles.metricValue}>$7,500</span>
              </div>
            </div>
            <div className={styles.chartContainer}>
              <h4 className={styles.chartTitle}>Spending This Month</h4>
              <div className={styles.lineChart}>
                <svg width="200" height="100" viewBox="0 0 200 100">
                  <polyline
                    points="20,80 50,70 80,60 110,50 140,40 170,30"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2"
                  />
                  <text x="20" y="95" fontSize="10" fill="#666">
                    Apr
                  </text>
                  <text x="50" y="95" fontSize="10" fill="#666">
                    Mar
                  </text>
                  <text x="80" y="95" fontSize="10" fill="#666">
                    May
                  </text>
                  <text x="110" y="95" fontSize="10" fill="#666">
                    Jun
                  </text>
                  <text x="140" y="95" fontSize="10" fill="#666">
                    Sep
                  </text>
                </svg>
              </div>
            </div>
          </div>

          {/* Expense by Category Card */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Expense by Category</h3>
            <div className={styles.chartContainer}>
              <div className={styles.donutChart}>
                <svg width="120" height="120" viewBox="0 0 120 120">
                  <circle
                    cx="60"
                    cy="60"
                    r="40"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="20"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="40"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="20"
                    strokeDasharray="88 251"
                    strokeDashoffset="0"
                    transform="rotate(-90 60 60)"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="40"
                    fill="none"
                    stroke="#1d4ed8"
                    strokeWidth="20"
                    strokeDasharray="50 251"
                    strokeDashoffset="-88"
                    transform="rotate(-90 60 60)"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="40"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="20"
                    strokeDasharray="25 251"
                    strokeDashoffset="-138"
                    transform="rotate(-90 60 60)"
                  />
                </svg>
              </div>
              <div className={styles.chartLegend}>
                <div className={styles.legendItem}>
                  <span
                    className={styles.legendDot}
                    style={{ backgroundColor: "#8b5cf6" }}
                  ></span>
                  <span>Transportation 35%</span>
                </div>
                <div className={styles.legendItem}>
                  <span
                    className={styles.legendDot}
                    style={{ backgroundColor: "#3b82f6" }}
                  ></span>
                  <span>Shopping 20%</span>
                </div>
                <div className={styles.legendItem}>
                  <span
                    className={styles.legendDot}
                    style={{ backgroundColor: "#f97316" }}
                  ></span>
                  <span>Housing 10%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Us Card */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Contact Us</h3>
            <p className={styles.cardDescription}>
              Have any questions or need help? Get in touch with us.
            </p>
            <button className={`${styles.btn} ${styles.btnOutline}`}>
              Get In Touch
            </button>
          </div>

          {/* Budget Summary Card */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Budget Summary</h3>
            <div className={styles.budgetSummary}>
              <div className={styles.budgetRow}>
                <span className={styles.budgetLabel}>Total Budget</span>
                <span className={styles.budgetValue}>$12,000</span>
              </div>
              <div className={styles.budgetRow}>
                <span className={styles.budgetLabel}>Remaining</span>
                <span
                  className={`${styles.budgetValue} ${styles.budgetPositive}`}
                >
                  $7,500
                </span>
              </div>
              <div className={styles.budgetRow}>
                <span className={styles.budgetLabel}>Expenses</span>
                <span
                  className={`${styles.budgetValue} ${styles.budgetNegative}`}
                >
                  $7,500
                </span>
              </div>
              <div className={styles.budgetRow}>
                <span className={styles.budgetLabel}>Budget</span>
                <span
                  className={`${styles.budgetValue} ${styles.budgetPositive}`}
                >
                  $4,500
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

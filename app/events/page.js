import styles from "./events.module.css";

export default function Events() {
  return (
    <div className={styles.eventsContainer}>

      <div className={styles.scheduleContainer}>

        <div className={styles.headerContainer}>
          <h1>Daily Schedule</h1>
        </div>
        
        <div className={styles.scheduleContent}>
          <h2>Kids Taekwondo Class</h2>
          <p>Monday, Wednesday, and Friday</p>
          <p>4pm-5pm</p>
          <h2>Adult Taekwondo Class</h2>
          <p>Monday, Wednesday, and Friday</p>
          <p>5:30pm-6:30pm</p>
          <h2>Yotae</h2>
          <p>Tuesday and Thursday</p>
          <p>5:30pm-6:30pm</p>
          <h2>Trip Outreach</h2>
          <p>Saturday</p>
          <p>10am - Varies</p>
        </div>
      </div>

      <div className={styles.calendar}>
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23D50000&ctz=America%2FChicago&title=Events%20Schedule&src=NTMwNzBhNzQ4ZDI2YWEwZmJiYjZhMDg0YzNkM2U3M2ExYzQzNzMwYmVjNWJmNjA0MDhhOTQwNWY4YjVhNmQyZkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%237CB342"
          style={{ borderWidth: 0, borderRadius: "10px"}}
          width="800"
          height="600"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
}

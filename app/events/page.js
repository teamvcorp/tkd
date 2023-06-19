import "./events.css";

export default function Events() {
  return (
    <div className="eventsContainer">
      <div>
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23D50000&ctz=America%2FChicago&title=Events%20Schedule&src=NTMwNzBhNzQ4ZDI2YWEwZmJiYjZhMDg0YzNkM2U3M2ExYzQzNzMwYmVjNWJmNjA0MDhhOTQwNWY4YjVhNmQyZkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%237CB342"
          style={{borderWidth:0}}
          width="800"
          height="600"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
}


import { useState, type FormEvent } from "react";

const getMinBookingDate = () => {
  const date = new Date();
  date.setDate(date.getDate() + 5);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const VisitBooking = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [visitDate, setVisitDate] = useState("");
  const [visitors, setVisitors] = useState("1");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");
    setSubmitted(false);

    if (visitDate < getMinBookingDate()) {
      setError("Please book at least 5 days in advance.");
      return;
    }

    // Parse the selected date as a local date, not UTC.
    const [year, month, day] = visitDate.split("-").map(Number);
    const selectedDate = new Date(year, month - 1, day);
    const weekday = selectedDate.getDay();

    if (weekday !== 3 && weekday !== 6) {
      setError("Visits are available only on Wednesdays and Saturdays.");
      return;
    }

    if (Number(visitors) < 1 || Number(visitors) > 50) {
      setError("Your group must have between 1 and 50 visitors.");
      return;
    }

    // Frontend demo only. No API request is made yet.
    setSubmitted(true);
  };

  return (
    <section
      id="visit"
      className="relative isolate overflow-hidden bg-green-50/70 px-5 py-16 sm:px-8 md:py-24 rounded-xl shadow-xl"
    >
      {/* Subtle imigongo texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[url('/images/download.jpg')] bg-cover bg-center opacity-[0.05]"
      />

      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-start md:gap-16">
        {/* Intro */}
        <div>
          <p className="mb-3 text-sm font-bold tracking-widest text-green-800">
            COME VISIT US
          </p>

          <h2 className="mb-5 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Experience life at
            <span className="block text-green-800">Prime Agro.</span>
          </h2>

          <p className="mb-8 max-w-lg leading-relaxed text-gray-600">
            Interested in seeing our farm? Request a visit and
            our team will contact you to confirm the details.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-800">
                <span aria-hidden="true">📅</span>
              </span>
              <div>
                <h3 className="font-bold text-gray-900">
                  Visiting days
                </h3>
                <p className="text-sm text-gray-600">
                  Wednesdays and Saturdays
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-800">
                <span aria-hidden="true">👥</span>
              </span>
              <div>
                <h3 className="font-bold text-gray-900">
                  Group size
                </h3>
                <p className="text-sm text-gray-600">
                  Up to 50 visitors per booking
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-800">
                <span aria-hidden="true">✉️</span>
              </span>
              <div>
                <h3 className="font-bold text-gray-900">
                  Confirmation
                </h3>
                <p className="text-sm text-gray-600">
                  Our team will confirm by email and SMS.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Booking form */}
        <div className="rounded-2xl border border-green-900/10 bg-white p-5 shadow-lg sm:p-8">
          <h3 className="mb-2 text-2xl font-bold text-gray-900">
            Request a farm visit
          </h3>
          <p className="mb-6 text-sm text-gray-600">
            Complete the details below to request your visit.
          </p>

          {submitted ? (
            <div
              role="status"
              className="rounded-xl border border-green-200 bg-green-50 p-5"
            >
              <h4 className="mb-2 font-bold text-green-900">
                Request details validated!
              </h4>
              <p className="mb-4 text-sm leading-relaxed text-green-800">
                Your form is valid, but no booking has been sent
                to Prime Agro yet. The API connection will come next.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="font-semibold text-green-800 underline hover:text-green-600"
              >
                Edit request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Full name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  required
                  maxLength={100}
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                  placeholder="Your full name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-800 focus:ring-2 focus:ring-green-800/20"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-800 focus:ring-2 focus:ring-green-800/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Phone number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    maxLength={30}
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder="+250 ..."
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-800 focus:ring-2 focus:ring-green-800/20"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="visitDate"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Preferred date
                  </label>
                  <input
                    id="visitDate"
                    name="visitDate"
                    type="date"
                    required
                    min={getMinBookingDate()}
                    value={visitDate}
                    onChange={(event) => setVisitDate(event.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-800 focus:ring-2 focus:ring-green-800/20"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Wednesdays or Saturdays, at least 5 days ahead.
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="visitors"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Number of visitors
                  </label>
                  <input
                    id="visitors"
                    name="visitors"
                    type="number"
                    required
                    min={1}
                    max={50}
                    step={1}
                    value={visitors}
                    onChange={(event) => setVisitors(event.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-800 focus:ring-2 focus:ring-green-800/20"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Additional details (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  maxLength={1000}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Tell us about your visit..."
                  className="w-full resize-y rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-800 focus:ring-2 focus:ring-green-800/20"
                />
              </div>

              {error && (
                <p role="alert" className="text-sm font-medium text-red-700">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="w-full rounded-xl bg-green-800 px-6 py-3 font-semibold text-white transition-colors hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-800 focus:ring-offset-2"
              >
                Request a visit →
              </button>

              <p className="text-center text-xs leading-relaxed text-gray-500">
                This is a visit request, not a confirmed booking.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default VisitBooking;

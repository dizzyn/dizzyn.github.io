import Image from "next/image";
import classNames from "classnames";
import {
  bio,
  skills,
  workExperience,
  education,
  memberships,
} from "../../data/data";

interface CVContentProps {
  showDownloadButton?: boolean;
  basePath?: string;
}

const formatText = (text: string) => {
  if (!text) return "";
  const parts = text.split("**");
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-bold text-gray-900">
        {part}
      </strong>
    ) : (
      part
    )
  );
};

export default function CVContent({
  showDownloadButton = false,
  basePath = "",
}: CVContentProps) {
  return (
    <div className="max-w-4xl mx-auto w-full p-8 sm:p-12 space-y-8">
      {/* HEADER */}
      <div className="flex gap-6 items-center">
        <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-200 flex-shrink-0 border border-gray-100">
          <Image
            src="/avatar.jpg"
            alt={`${bio.name} profile photo`}
            width={112}
            height={112}
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-2 text-gray-900">{bio.name}</h1>
          <div className="text-sm text-gray-600 space-y-0.5">
            <div>{bio.location}</div>
            <div className="flex gap-3">
              <a
                href={`mailto:${bio.email}`}
                className="hover:text-black transition-colors"
              >
                {bio.email}
              </a>
              <span>|</span>
              <a
                href={`tel:${bio.phone}`}
                className="hover:text-black transition-colors"
              >
                {bio.phone}
              </a>
            </div>
          </div>
          {showDownloadButton && (
            <div className="mt-3">
              <a
                href={`${basePath}/tom-randus-cv.pdf`}
                download
                className="inline-flex items-center gap-2 px-3 py-1 text-xs bg-gray-800 text-gray-200 rounded border border-gray-700 hover:bg-gray-700 hover:text-white transition-colors"
              >
                📄 Download PDF
              </a>
            </div>
          )}
        </div>
      </div>

      {/* SUMMARY */}
      <div className="space-y-3">
        <p className="text-base leading-relaxed text-gray-800 max-w-3xl">
          {formatText(bio.summary || "")}
        </p>

        <p className="text-sm text-gray-600">
          Available for hire in:{" "}
          {bio.available.map((loc, idx) => (
            <span key={loc.city + loc.type}>
              <span className="font-semibold text-gray-800">{loc.city}</span> (
              {loc.type}){idx < bio.available.length - 1 && " or "}
            </span>
          ))}
        </p>
      </div>

      <hr className="border-gray-200" />

      {/* WORK EXPERIENCE */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Work Experience
        </h2>

        <div className="pl-2">
          <ul className="pl-6 border-l-[2px] border-slate-200 space-y-8">
            {workExperience.map((item, index) => (
              <li key={index} className="relative">
                <span className="absolute -left-[31px] top-[6px] w-3 h-3 bg-slate-400 ring-4 ring-white rounded-full"></span>

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                  <h3 className="text-lg font-bold text-gray-900">
                    {item.title}{" "}
                    {item.company && (
                      <span className="font-normal text-gray-500">at</span>
                    )}{" "}
                    {item.company}
                  </h3>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    {item.from} — {item.to || "Present"}
                  </span>
                </div>

                <div className="text-sm text-slate-700 leading-normal">
                  {Array.isArray(item.description) ? (
                    <ul className="list-disc list-outside ml-4 space-y-1 marker:text-slate-400">
                      {item.description.map((desc, idx) => (
                        <li key={idx} className="pl-1">
                          {formatText(desc)}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>{formatText(item.description)}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* SKILLS */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-3">Skills</h2>
        <div className="grid grid-cols-1 gap-5">
          {skills.map((item, index) => (
            <div key={index}>
              <h3 className="text-base font-bold text-gray-900 mb-0.5">
                {item.name}
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                {formatText(item.description)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* EDUCATION */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-3">Education</h2>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {education.degree} in {education.field}
          </h3>
          <p className="text-sm text-slate-700">
            {education.institution}, {education.location}
          </p>
          <p className="text-xs text-slate-500 mt-0.5">
            {education.startYear} – {education.endYear}
          </p>
        </div>
      </div>

      {/* MEMBERSHIPS & HOBBIES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Memberships</h2>
          <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
            {memberships.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Hobbies & Interests
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            {bio.hobbies.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import classNames from "classnames";
import { bio, extraSkills, skills, workExperience } from "../../data/data";

interface CVContentProps {
  showDownloadButton?: boolean;
  basePath?: string;
}

export default function CVContent({
  showDownloadButton = false,
  basePath = "",
}: CVContentProps) {
  const currentYear = new Date().getFullYear();
  const experienceYears = currentYear - bio.experienceStart;

  return (
    <div className="max-w-4xl mx-auto w-full p-8 sm:p-16 space-y-8">
      <div className="flex gap-8 items-center">
        <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
          <Image
            src="/avatar.jpg"
            alt={`${bio.name} profile photo`}
            width={128}
            height={128}
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="flex flex-col">
          <h1 className="text-4xl font-bold mb-3">{bio.name}</h1>
          <div>{bio.location}</div>
          <div>{bio.email}</div>
          <div>{bio.phone}</div>
          {showDownloadButton && (
            <div className="mt-4">
              <a
                href={`${basePath}/tom-randus-cv.pdf`}
                download
                className="inline-flex items-center gap-2 px-3 py-1.5 text-xs bg-gray-800 text-gray-300 rounded border border-gray-700 hover:bg-gray-700 hover:text-white transition-colors duration-200 font-normal leading-tight"
              >
                📄 Download PDF
              </a>
            </div>
          )}
        </div>
      </div>

      <div className="py-4 space-y-4">
        <p className="text-lg max-w-2xl">
          With more then <b>{experienceYears}</b> years of experience. I am
          based in <b>{bio.location}</b>. I am available for hire in{" "}
          {bio.available.map((loc, idx) => (
            <span key={loc.city + loc.type}>
              <b>{loc.city}</b> ({loc.type})
              {idx < bio.available.length - 1 && " or "}
            </span>
          ))}
          .
        </p>
        <p className="text-lg max-w-2xl">
          Currently I am learning about <b>{bio.newSkills.join(", ")}</b>
        </p>
      </div>

      <div className="space-y-16">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Work Experience</h2>
          <ul className="pl-10">
            {workExperience.map((item, index) => (
              <li key={index} className="relative pb-8">
                <span
                  className={classNames(
                    "w-[2px] bg-slate-400 absolute -left-7 top-0",
                    index < workExperience.length - 1 ? "h-full" : "h-2"
                  )}
                >
                  <span className="w-3 h-3 bg-slate-400 ring-2 ring-white rounded-full absolute -left-[5px] top-2"></span>
                </span>
                <h3 className="text-xl font-semibold">
                  {item.title} at {item.company}
                </h3>
                <p className="text-sm text-slate-600">
                  {item.from} - {item.to || "Present"}
                </p>
                <div>
                  {Array.isArray(item.description) ? (
                    <ul className="list-disc list-inside text-sm mt-2">
                      {item.description.map((desc, idx) => (
                        <li key={idx}>{desc}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{item.description}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="space-y-16">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Skills</h2>
          <ul className="px-0">
            {skills.map((item, index) => (
              <li key={index} className="relative pb-8">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="space-y-16">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Additional Skills</h2>
          <ul className="px-0">
            {extraSkills.map((item, index) => (
              <li key={index} className="relative pb-8">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="space-y-16">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Hobbies & Interests</h2>
          <ul className="px-0 flex gap-1">
            {bio.hobbies.map((item, index) => (
              <li key={index} className="relative pb-8">
                <p>
                  {item}
                  {index < bio.hobbies.length - 1 ? ", " : ""}{" "}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

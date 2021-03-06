import React from "react";

function TeamMemberItem({ data }) {
  return (
    <div className="team team__style--2">
      <div className="thumb">
        <img
          alt={data.name}
          src={"./team-2/" + data.thumb + ".webp"}
          type={"./team-2/" + data.thumb + ".webp"}
        />

        <div className="overlay" />
        <ul className="socialBarLeft social-icon icon-solid-rounded icon-size-medium text-center">
          {data.socials.map((social) => (
            <li key={social.id} className={social.media}>
              {social.media === "linkedin" ? (
                <a
                  href={`https://${social.media}.com/in/${social.username}`}
                  className="link"
                  aria-label={social.media}
                >
                  <i className={`fa fa-${social.media}`} />
                </a>
              ) : (
                <a
                  href={`https://${social.media}.com/${social.username}`}
                  className="link"
                  aria-label={social.media}
                >
                  <i className={`fa fa-${social.media}`} />
                </a>
              )}
            </li>
          ))}
        </ul>
        <div className="team-info">
          <div className="info">
            <h5>{data.name}</h5>
            <span>{data.designation}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamMemberItem;

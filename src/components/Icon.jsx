export default function Icon({ name = "home" }) {
  let icon;
  const home = (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19.985" viewBox="0 0 20 19.985">
      <path id="bxs-home-circle" d="M21.743,12.331l-9-10a1.03,1.03,0,0,0-1.486,0l-9,10A1,1,0,0,0,3,14H5v7a1,1,0,0,0,1,1H18a1,1,0,0,0,1-1V14h2a1,1,0,0,0,.743-1.669ZM12,16a3,3,0,1,1,3-3A3,3,0,0,1,12,16Z" transform="translate(-2 -2.015)" />
    </svg>
  );

  switch (name) {
    case "home":
      icon = home;
      break;

    case "login":
      icon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="20.002" height="18.002" viewBox="0 0 20.002 18.002">
          <g id="bx-log-in-circle" transform="translate(-1.998 -2.999)">
            <path id="Path_18" data-name="Path 18" d="M11,16l5-4L11,8v3H2v2h9Z" />
            <path id="Path_19" data-name="Path 19" d="M13,3A8.938,8.938,0,0,0,6.635,5.636L8.049,7.05a7,7,0,1,1,0,9.9L6.635,18.364A9,9,0,1,0,19.363,5.636,8.938,8.938,0,0,0,13,3Z" />
          </g>
        </svg>
      );
      break;

    case "about":
      icon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
          <path id="bxs-info-circle" d="M12,2A10,10,0,1,0,22,12,10.011,10.011,0,0,0,12,2Zm1,15H11V11h2Zm0-8H11V7h2Z" transform="translate(-2 -2)" />
        </svg>
      );
      break;

    case "contact":
      icon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
          <path id="bxs-contact" d="M21,2H6A2,2,0,0,0,4,4V7H2V9H4v2H2v2H4v2H2v2H4v3a2,2,0,0,0,2,2H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM13,5a3,3,0,1,1-3,3A3.011,3.011,0,0,1,13,5Zm6,13H7v-.75c0-2.219,2.7-4.5,6-4.5s6,2.281,6,4.5Z" transform="translate(-2 -2)" />
        </svg>
      );
      break;


    default:
      icon = home;
  }

  return icon;
}
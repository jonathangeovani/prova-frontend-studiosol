type IconProps = {
  color?: string;
  size?: number;
};

export const HomeFilledIcon = ({ color = "#9E9E9E", size = 24 }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_5332_478)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.5714 21.5C14.5714 21.7761 14.7953 22 15.0714 22H20.5C20.7761 22 21 21.7761 21 21.5V11.2451C21 10.5371 20.5824 9.56469 20.0673 9.08176L12.8993 2.36161C12.3782 1.87308 11.5445 1.88284 11.0239 2.37091L3.94263 9.00973C3.42045 9.49928 3 10.4633 3 11.1662C3 11.1662 3 11.5708 3 11.7732C3 14.2853 3 19.8134 3 21.501C3 21.7771 3.22386 22 3.5 22H8.92857C9.20471 22 9.42857 21.7761 9.42857 21.5V15C9.42857 14.7239 9.65243 14.5 9.92857 14.5H14.0714C14.3476 14.5 14.5714 14.7239 14.5714 15V21.5Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_5332_478">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const PlusFilledIcon = ({ color = "#9E9E9E", size = 24 }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_5332_471)">
        <path
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17 13H13V17H11V13H7V11H11V7H13V11H17V13Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_5332_471">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const SearchOutlinedIcon = ({
  color = "#9E9E9E",
  size = 24,
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.2939 14.5786H15.3905L15.0703 14.2699C16.191 12.9663 16.8656 11.2739 16.8656 9.43282C16.8656 5.32762 13.538 2 9.43282 2C5.32762 2 2 5.32762 2 9.43282C2 13.538 5.32762 16.8656 9.43282 16.8656C11.2739 16.8656 12.9663 16.191 14.2699 15.0703L14.5786 15.3905V16.2939L20.2962 22L22 20.2962L16.2939 14.5786ZM9.43282 14.5786C6.58548 14.5786 4.28702 12.2802 4.28702 9.43282C4.28702 6.58548 6.58548 4.28702 9.43282 4.28702C12.2802 4.28702 14.5786 6.58548 14.5786 9.43282C14.5786 12.2802 12.2802 14.5786 9.43282 14.5786Z"
        fill={color}
      />
    </svg>
  );
};

export const HeartFilledIcon = ({
  color = "#9E9E9E",
  size = 24,
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_5332_457)">
        <path
          d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_5332_457">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const HeartOutlinedIcon = ({
  color = "#9E9E9E",
  size = 24,
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_5334_863)">
        <path
          d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L12 21.35L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_5334_863">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

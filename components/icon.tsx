import React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
};

export const PhoneIcon: React.FC<IconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="41"
      height="40"
      viewBox="0 0 41 40"
      fill="none"
      {...props}
    >
      <path
        d="M37.1664 28.2003V33.2003C37.1683 33.6645 37.0732 34.1239 36.8872 34.5492C36.7013 34.9745 36.4286 35.3563 36.0865 35.6701C35.7445 35.9839 35.3407 36.2228 34.901 36.3715C34.4613 36.5202 33.9953 36.5754 33.5331 36.5337C28.4044 35.9764 23.4781 34.2239 19.1497 31.417C15.1228 28.8581 11.7086 25.4439 9.14973 21.417C6.33302 17.069 4.58013 12.1186 4.03306 6.96699C3.99141 6.5061 4.04618 6.04159 4.19389 5.60303C4.3416 5.16447 4.57901 4.76147 4.891 4.41969C5.20299 4.07791 5.58273 3.80484 6.00604 3.61786C6.42935 3.43088 6.88696 3.33409 7.34973 3.33366H12.3497C13.1586 3.3257 13.9427 3.61212 14.556 4.13955C15.1693 4.66697 15.5699 5.3994 15.6831 6.20032C15.8941 7.80043 16.2855 9.37154 16.8497 10.8837C17.074 11.4802 17.1225 12.1285 16.9896 12.7518C16.8566 13.3751 16.5478 13.9472 16.0997 14.4003L13.9831 16.517C16.3557 20.6896 19.8105 24.1444 23.9831 26.517L26.0997 24.4003C26.5529 23.9522 27.125 23.6434 27.7483 23.5105C28.3715 23.3776 29.0199 23.4261 29.6164 23.6503C31.1285 24.2146 32.6996 24.606 34.2997 24.817C35.1093 24.9312 35.8487 25.339 36.3773 25.9628C36.9058 26.5866 37.1867 27.383 37.1664 28.2003Z"
        stroke="black"
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const MailIcon: React.FC<IconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="41"
      height="40"
      viewBox="0 0 41 40"
      fill="none"
      {...props}
    >
      <path
        d="M33.8333 6.6665H7.16659C5.32564 6.6665 3.83325 8.15889 3.83325 9.99984V29.9998C3.83325 31.8408 5.32564 33.3332 7.16659 33.3332H33.8333C35.6742 33.3332 37.1666 31.8408 37.1666 29.9998V9.99984C37.1666 8.15889 35.6742 6.6665 33.8333 6.6665Z"
        stroke="black"
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M37.1666 11.6665L22.2166 21.1665C21.702 21.4889 21.1071 21.6599 20.4999 21.6599C19.8927 21.6599 19.2978 21.4889 18.7833 21.1665L3.83325 11.6665"
        stroke="black"
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ArrowIcon: React.FC<IconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M18 8L22 12L18 16"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 12H22"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

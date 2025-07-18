type ClipboardProps = {
  size: string;
};

const Logo = ({ size }: ClipboardProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 100 100"
  >
    <path
      fill="#27AE60"
      d="M100 94a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V16a6 6 0 0 1 6-6h88a6 6 0 0 1 6 6v78z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M82 87a2 2 0 0 1-2 2H20a2 2 0 0 1-2-2V18a2 2 0 0 1 2-2h60a2 2 0 0 1 2 2v69z"
      clip-rule="evenodd"
    />
    <path
      fill="#BDC3C7"
      fill-rule="evenodd"
      d="M72 20H28a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h15a7 7 0 1 1 14 0h15a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3zM50 4a3 3 0 1 0 0 6a3 3 0 0 0 0-6z"
      clip-rule="evenodd"
    />
    <path
      fill="#A1A6A9"
      fill-rule="evenodd"
      d="M72 20H28a3 3 0 0 1-3-3v-2a3 3 0 0 0 3 3h44a3 3 0 0 0 3-3v2a3 3 0 0 1-3 3z"
      clip-rule="evenodd"
    />
    <path
      fill-rule="evenodd"
      d="M94 97H6a6 6 0 0 1-6-6v3a6 6 0 0 0 6 6h88a6 6 0 0 0 6-6v-3a6 6 0 0 1-6 6z"
      clip-rule="evenodd"
      opacity=".15"
    />
    <path
      fill="#BDC3C7"
      fill-rule="evenodd"
      d="M41 40.999v3h31v-3H41zM41 55h31v-3.001H41V55zm0 10.998h31v-2.999H41v2.999zm0 11.001h31v-3H41v3zm-13-31h7v-7h-7v7zm0 11h7v-7h-7v7zm0 11h7v-7h-7v7zM28 79h7v-7.001h-7V79z"
      clip-rule="evenodd"
    />
    <path
      fill="#27AE60"
      fill-rule="evenodd"
      d="M41 29v3.001h31V29H41zm-5.073-1.214l-.708-.713a.25.25 0 0 0-.354 0l-3.728 3.703a.248.248 0 0 1-.354 0l-1.633-1.66a.25.25 0 0 0-.354 0l-.722.648a.248.248 0 0 0-.074.175l.011.054H28v.998h.011l.063.127l1.647 1.725l.354.355l.708.713a.25.25 0 0 0 .354 0l4.79-4.771l.067-.144H36v-.998h-.006a.25.25 0 0 0-.067-.212z"
      clip-rule="evenodd"
    />
    <path
      fill="#A1A6A9"
      fill-rule="evenodd"
      d="M50 4a2.99 2.99 0 0 1 2.816 2c.112-.313.184-.646.184-.999a3 3 0 0 0-6.001 0c0 .353.072.686.184 1A2.991 2.991 0 0 1 50 4z"
      clip-rule="evenodd"
    />
  </svg>
);

export default Logo;

import Link from "next/link";

export default function NavButton({
  url,
  buttonText,
}: {
  url: any;
  buttonText: string;
}) {
  return (
    <Link href={url}>
      <div className="w-[4.3rem] flex align-center justify-center bg-buttons rounded-[4px] text-sm text-white p-[3px] ">
        <button>{buttonText}</button>
      </div>
    </Link>
  );
}

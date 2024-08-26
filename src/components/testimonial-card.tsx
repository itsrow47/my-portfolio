import Markdown from "react-markdown";
interface Props {
  who: string;
  description: string;
}

export function TestimonialCard({ who, description }: Props) {
  return (
    <div className="border rounded-lg p-2 dark:bg-gray-900/25 bg-gray-50 ">
      <Markdown className="text-sm light:text-gray-500 antialiased leading-6">
        {description}
      </Markdown>
      <br></br>
      <div className="font-bold text-[13px] ">{who}</div>
    </div>
  );
}

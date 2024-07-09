interface Props {
  who: string;
  description: string;
}

export function TestimonialCard({ who, description }: Props) {
  return (
    <div className="border rounded-lg p-5 ">
      <div className="text-sm light:text-gray-600">{description}</div>
      <br></br>
      <div className="font-semibold text-xs ">{who}</div>
    </div>
  );
}

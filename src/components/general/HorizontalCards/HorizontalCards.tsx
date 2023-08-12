import "./horizontalcards.css";

export interface HorizontalCardProps {
  name: string;
  svg: any;
  svgBackground: string;
  description: string;
}

function HorizontalCard({
  name,
  svg,
  svgBackground,
  description,
}: HorizontalCardProps) {
  return (
    <div className="dept-card-container">
      <div className="svg-container" style={{ backgroundColor: svgBackground }}>
        {svg}
      </div>
      <div className="details">
        <div className="dept-name">{name}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
}

export default function HorizontalCards({
  data,
}: {
  data: HorizontalCardProps[];
}) {
  return (
    <div className="dept-container">
      <div className="title">Our Departments</div>
      <div className="dept-wrapper">
        {data?.map((item: HorizontalCardProps, index: number) => (
          <HorizontalCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

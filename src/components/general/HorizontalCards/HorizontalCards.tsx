import "./horizontalcards.css";

export interface HorizontalCard {
  name: string;
  Icon: any;
  iconFillColor: string;
  description: string;
}

function HorizontalCard({
  name,
  Icon,
  iconFillColor,
  description,
}: HorizontalCard) {
  return (
    <div className="dept-card">
      <div className="svg-container" style={{ backgroundColor: iconFillColor }}>
        <Icon />
      </div>
      <div className="details">
        <div className="dept-name">{name}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
}

export default function HorizontalCards({ data }: { data: HorizontalCard[] }) {
  return (
    <div className="dept-container">
      <div className="title">Our Departments</div>
      <div className="dept-wrapper">
        {data?.map((item: HorizontalCard, index: number) => (
          <HorizontalCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

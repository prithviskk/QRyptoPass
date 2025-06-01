type CardProps = {
  title: string;
  tags: string[];
  description: string;
  badgeText?: string;
  badgeColor?: string;
  imageSrc: string;
  imageAlt?: string;
  backgroundColor?: string;
};

const Card = ({
  title,
  tags,
  description,
  badgeText,
  badgeColor = "#5E1D25",
  imageSrc,
  imageAlt = "Card image",
  backgroundColor = "#3E1D25",
}: CardProps) => {
  return (
    <div
      className="rounded-xl shadow-md overflow-hidden flex flex-col"
      style={{ backgroundColor }}
    >
      {/* Image with rounded top corners only */}
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full object-cover rounded-t-xl"
      />
      {/* Card body */}
      <div className="px-6 py-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold text-white">{title}</h2>
          {badgeText && (
            <span
              className="bg-white px-2 py-1 text-xs font-medium rounded-full"
              style={{ color: badgeColor }}
            >
              {badgeText}
            </span>
          )}
        </div>
        <p className="text-white text-sm mb-4">{description}</p>
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag) => (
            <span
              key={tag}
              className="border border-white text-white text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;

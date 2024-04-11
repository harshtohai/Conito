export default function Review({
  image,
  name,
  review,
}: {
  image: string;
  name: string;
  review: string;
}) {
  return (
    <div className="w-full flex flex-col mb-6 justify-between ">
      <div className="flex items-end ">
        <img
          className="rounded-[100px] "
          height={34}
          width={34}
          src={image}
          alt={`${name}'s PFP`}
        />
        <h2 className="text-[20px]  font-medium ml-3">{name}</h2>
      </div>
      <div className="text-sm mt-[3px] text-white">{review}</div>
    </div>
  );
}

const SingleAd = ({
  ad,
}: {
  ad: {
    id: number;
    img: string;
  };
}) => {
  return (
    <>
      <div className="absolute left-0 bg-gradient-to-t from-[#0973B180] to-transparent top-0 w-full h-full" />
      <img src={ad.img} alt="advert banner image" />
    </>
  );
};

export default SingleAd;

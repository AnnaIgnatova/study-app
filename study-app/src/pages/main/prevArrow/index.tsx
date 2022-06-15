export const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div>
      <img
        src="./assets/pagination.png"
        alt="prev"
        className={className}
        style={{
          ...style,
          width: '50px',
          height: '50px',
          objectFit: 'contain',
          position: 'absolute',
          top: '300px',
          left: '40%',
        }}
        onClick={onClick}
      />
    </div>
  );
};

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
          width: '60px',
          height: '60px',
          objectFit: 'contain',
          position: 'absolute',
          top: '350px',
          left: '40%',
        }}
        onClick={onClick}
      />
    </div>
  );
};

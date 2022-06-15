export const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div>
      <img
        src="./assets/pagination.png"
        alt="next"
        className={className}
        style={{
          ...style,
          width: '50px',
          height: '50px',
          objectFit: 'contain',
          transform: 'rotate(180deg)',
          position: 'absolute',
          top: '275px',
          right: '45%',
        }}
        onClick={onClick}
      />
    </div>
  );
};

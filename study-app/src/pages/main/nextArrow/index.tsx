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
          width: '60px',
          height: '60px',
          objectFit: 'contain',
          transform: 'rotate(180deg)',
          position: 'absolute',
          top: '325px',
          right: '45%',
        }}
        onClick={onClick}
      />
    </div>
  );
};

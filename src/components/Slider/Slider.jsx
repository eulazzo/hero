import { Item, ItemArrival } from "./styles";

const Slider = ({ img, newArrival = false, title = "" }) => {
  return (
    <>
      {!newArrival ? (
        <Item
          initial={{ filter: "grayscale(100%)" }}
          whileInView={{ filter: "grayscale(0%)" }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: "all" }}
        >
          <img src={img} alt={title} srcset="" />
          <span>{title}</span>
        </Item>
      ) : (
        <ItemArrival>
          <img src={img} alt={title} srcset="" />
          <span>{title}</span>
        </ItemArrival>
      )}
    </>
  );
};

export default Slider;

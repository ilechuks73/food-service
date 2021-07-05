import ProductCards from "../ProductCards";
import s from "../../styles/Content.module.css";
import TitleWithButton from "../TitleWithButton";
import FoodFilter from "../FoodFilter";
import Header from "../Header";

const Content = () => {
  return <div className={s.content}>
    <Header title="Jaegar Resto" withSearch />
    <FoodFilter />
    <TitleWithButton title="Choose Dishes" icon="arrowDown" buttonName="Dine In" />
    <ProductCards />
  </div>
}

export default Content;
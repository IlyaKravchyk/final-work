import { Button } from "../../../../components/shared/Buttons/Button"

export const CartCount = ({ count, countUp, countDown, productId }) => {

   return (
      <div className="cart__cart-count">
         <Button
            className="cart__count-down"
            textButton={<i className="fa fa-minus" aria-hidden="true"></i>}
            action={countDown}
            dataProduct={productId}
         />
         <span className="cart__cart-count-number">{count}</span>
         <Button
            className="cart__count-up"
            textButton={<i className="fa fa-plus" aria-hidden="true"></i>}
            action={countUp}
            dataProduct={productId}
         />
      </div>
   )
}
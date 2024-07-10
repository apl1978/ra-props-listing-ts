import { TItem } from '../../types';


export const Item = ({ item }: TItem) => {
	const isActive = (item.state == 'active');

	function formatPrice(price, code) {

		if (code === 'USD') {
			return `$${price}`
		}

		if (code === 'EUR') {
			return `€${price}`
		}

		return `${price} ${code}`
	}

	function levelQuantity(quantity) {
		let level = 'high';

		if (quantity <= 10) {
			level = 'low';
		} else if (quantity <= 20) {
			level = 'medium'
		}

		return level
	}


	return isActive ? (
			<div className="item">
				<div className="item-image">
					<a href={item.url}>
						<img src={item.MainImage.url_570xN} alt=''/>
					</a>
				</div>
				<div className="item-details">
					<p className="item-title">{item.title.length > 50 ? `${item.title.slice(0, 50)}...` : item.title}</p>
					<p className="item-price">{formatPrice(item.price, item.currency_code)}</p>
					<p className={`item-quantity level-${levelQuantity(item.quantity)}`}>{item.quantity} left</p>
				</div>
			</div>
		)
		: null;
}





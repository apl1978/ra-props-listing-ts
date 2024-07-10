import { Item } from '../Item';
import { TItem } from '../../types';

export const Listing = ({ items }: TItem[]) => {

    return (
        <div className="item-list">
            {items.map((item: TItem) => <Item key={item.listing_id} item={item} />)}
        </div>
    );
}
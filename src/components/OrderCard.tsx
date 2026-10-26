export interface OrderProps {oderId: string; customer: string; total: number; status: 'pending' | 'dispached' | 'delivered'; };

export const RenderCard = (order: OrderProps) => {
    return (    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{order.oderId}</h5>
        <p className="card-text">Customer: {order.customer}</p>
        <p className="card-text">
          Total: {order.total.toLocaleString()} RWF
        </p>
        <p className="card-text">Status: {order.status}</p>
      </div>
    </div>);
}
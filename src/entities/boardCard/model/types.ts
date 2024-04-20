export type Status = "New" | "Process" | "Checking" | "Sending" | "Arrived";

export type CardProps = {
   order: Order;
};

export type Order = {
   id: number;
   title: string;
   description?: string;
   date: string;
   status: Status;
};

export type OrdersState = {
   orders: Order[];
   draggedOrder: number | null;
};

export type OrdersActions = {
   addOrders: (orders: Order[]) => void;
   dragOrder: (id: number | null) => void;
   updateOrder: (id: number, status: Status) => void;
};

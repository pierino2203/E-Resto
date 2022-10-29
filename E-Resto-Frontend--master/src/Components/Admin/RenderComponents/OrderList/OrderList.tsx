import axios from "axios";
import { Modal } from "flowbite-react";
import { ModalBody } from "flowbite-react/lib/esm/components/Modal/ModalBody";
import { ModalHeader } from "flowbite-react/lib/esm/components/Modal/ModalHeader";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../config";
import { StateTypes } from "../../../../Interfaces/Interfaces";
import { getAllOrders } from "../../../../redux/actions";
import { buttonclass } from "../../../../Style/Clases/Clases";
import DeliveryList from "../../../DeliveryList/DeliveryList";
import './OrderList.css'

export default function Orderlist() {
  const dispatch = useAppDispatch();
  let detalles2 = useAppSelector((state: StateTypes) => state.allOrders)
  const [modalRepartidores, setModalRepartidores] = useState<boolean>(false)
  const [idOrder, setIdOrder] = useState<number>(0)

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);


  let detalles = JSON.parse(JSON.stringify(detalles2))

  const handleConfirm = (e: any) => {
    const prepared = {
      prepared: true
    }
    axios.put(`/order/edit/${e.target.value}`, prepared)
      .then(resp => resp.data)
      .then(res => dispatch(getAllOrders()))
      .catch(err => console.log(err))
  }


  function handleCloseRepartidores() {
    setModalRepartidores(false)
  }

  const handleAsign = (e:any) => {
    setIdOrder(e.target.value)
    setModalRepartidores(true)
  }

  return (
    <div data-aos="fade-left" data-aos-duration="500">
      {
        detalles.length === 0 ?
          (
            <h1>CARGANDO ... </h1>
          )
          :
          (
            <div className="orderlist-map-orders">
              {detalles.map((items: any) => {
                if (!items.delivered) {
                  return (
                    <div className="orderlist_price_conteiner">
                      <h1 className="h1-conteiner"> Detalles del pedido </h1>
                      <br></br>
                      <table className="orderlist_price_conteiner">
                        {items?.items.map((item: any) => {
                          return (
                            <div key={item._id}>
                              <tr className="orderlist_item_conteiner">
                                <td><img width={60} src={item.img} alt="alt"></img></td>
                                <td>{item.cantidad}</td>
                                <td>{item.name}</td>
                                <td><p> $ {item.price} </p></td>
                              </tr>
                              <h5>{item.comentario ? item.comentario : null}</h5>
                              <br></br>
                            </div>
                          );

                        })}
                      </table>
                      <br />
                      <div className="orderlist_price_conteiner2">
                        <div className="orderlist_details_conteiner">
                          <span>
                            <h2>Subtotal </h2>
                            <h2>${items.subtotal}</h2>
                          </span>
                          <span>
                            <h2>Propina </h2>
                            <h2>${items.propina}</h2>
                          </span>
                          <span>
                            <h2>
                              <strong>Total </strong>
                            </h2>
                            <h2>${items.total}</h2>
                          </span>
                          <span>
                            {
                              items.paid ?
                                <h2><strong>pagado</strong></h2>
                                :
                                null
                            }
                          </span>

                        </div>
                        {
                          items.User__.length ?
                            <div className="orderlist_details_conteiner">
                              <span>

                                <h1>
                                  <strong>Para:</strong> {items.User__[0].name}{" "}
                                  {items.User__[0].lastName}
                                </h1>
                              </span>
                              <span>
                                <h1>
                                  <strong>Direccion:</strong> {items.User__[0].adress}
                                </h1>
                              </span>
                              <span>
                                <h1>
                                  <strong>Horario:</strong> {items.date.slice(11, -5)}
                                </h1>
                              </span>
                            </div>
                            :
                            null
                        }
                      </div>

                      <br></br>

                      <div className="h1-conteiner">
                        {

                          !items.prepared ?
                          <button value={items._id} onClick={handleConfirm} className={buttonclass}> Confirmar Pedido </button>
                          :
                          items.Delivery__.length ?
                          <h1> Pedido Asignado a {items.Delivery__[0].name} {items.Delivery__[0].lastName} </h1>
                          :
                          <button  value={items._id} onClick={(e) => handleAsign(e)} className={buttonclass}> Asignar Repartidor </button>

                        }
                        
                      </div>
                      <br />

                    </div>
                  );
                }
                return null
              })}
                      <Modal
                        show={modalRepartidores}
                        onClose={handleCloseRepartidores}
                      >
                        <ModalHeader>
                          Repartidores Disponibles:
                        </ModalHeader>
                        <ModalBody>
                          <DeliveryList handleCloseRepartidores={handleCloseRepartidores} id={idOrder}></DeliveryList>
                        </ModalBody>
                      </Modal>
            </div>
          )
      }
    </div>
  );
}

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from '../../config'
import { addToCart, getFoodById, vaciarComida, deleteItemFromCart } from '../../redux/actions/index'
import '../DetailProduct/DetailProduct.css'
import { Button, Dropdown, Modal } from "flowbite-react";
import swal from "sweetalert";
import { ModalHeader } from "flowbite-react/lib/esm/components/Modal/ModalHeader";
import { ModalBody } from "flowbite-react/lib/esm/components/Modal/ModalBody";
import { ModalFooter } from "flowbite-react/lib/esm/components/Modal/ModalFooter";
import PrettyRating from "pretty-rating-react";

export default function DetailProduct({ id, closeModalDetail }) {

    const dispatch = useAppDispatch()
    const food = useAppSelector((state) => state.detail[0]);
    const categories = useAppSelector((state) => state.backUpCategories);
    const cart = useAppSelector((state) => state.cart);

    const [extraItem, setExtraItem] = useState(null);
    const [extra, setExtra] = useState(0);
    const [comentario, setComentario] = useState("")
    const [opinionesModal, setOpinionesModal] = useState(false);

    useEffect(() => {
        dispatch(getFoodById(id))
        return function limpiar() {
            dispatch(vaciarComida())
        }
    }, [dispatch, id])

    function closeDetailModal() {
        closeModalDetail(false)
    }

    function addFoodToCart() {

        let itemFound = cart.find(item => item._id === food._id)

        let itemExtraFound

        if (extraItem !== null) {
            itemExtraFound = cart.find(item => item._id === extraItem._id)
        }

        if (!itemFound) {

            let item = {
                ...food,
                price: food.off ? food.price - ((food.price * food.off) / 100) : food.price,
                cantidad: 1,
                comentario: comentario
            }
            dispatch(addToCart(item))
            if (!itemExtraFound && extraItem !== null) {
                let item = {
                    ...extraItem,
                    cantidad: 1
                }
                dispatch(addToCart(item))
            }
            else if (itemExtraFound) {
                item = {
                    ...itemExtraFound,
                    cantidad: itemExtraFound.cantidad + 1
                }
                dispatch(deleteItemFromCart(itemExtraFound._id))
                dispatch(addToCart(item))
            }
            swal({ title: `Se agrego ${food.name}` })
            closeDetailModal()
        }
        else {
            swal({ title: `Ya esta agregado ${food.name} al carrito, puedes cambiar su cantidad en el carrito` })
            closeDetailModal()
        }
    }

    function handleExtraItem(item) {
        setExtraItem(item)
        setExtra(item.price)
    }

    function handleComentario(event) {
        event.preventDefault()
        setComentario(event.target.value)
    }

    function removeExtraItem() {
        setExtra(0)
        setExtraItem(null)
    }

    function closeOpinionesModal() {
        setOpinionesModal(false)
    }

    const colors = {
        star: ['#d9ad26', '#d9ad26', '#434b4d'],
    }

    return (
        <div >
            <Modal
                show={opinionesModal}
                onClose={closeOpinionesModal}
            ><fieldset disabled="disabled"></fieldset>
                <ModalHeader>
                    <h1>Calificaciones de {food?.name}</h1>
                </ModalHeader>
                <ModalBody>
                    {
                        food && food.reviewList.length > 0 ?
                            <div className="conteiner_calificaciones_detalle">
                                {
                                    food.reviewList.map(rev => {
                                        return (
                                            <div>
                                                <p>{rev.date.slice(0, 10)}</p>
                                                <p>"{rev.comment}"</p>
                                                <PrettyRating value={rev.rating} colors={colors.star} />
                                                <br />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            :
                            <div>
                                <h1>No hay calificaciones para este producto</h1>
                            </div>
                    }

                </ModalBody>
            </Modal>
            {
                food && food ?
                    <Modal
                        show={closeModalDetail}
                        size="6xl"
                        popup={true}
                        onClose={closeDetailModal}
                        data-aos="zoom-in-down"
                        data-aos-duration="500"
                    >
                        <Modal.Header>
                            <h1 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{food.name}</h1>
                        </Modal.Header>
                        <Modal.Body>
                            <hr></hr>
                            <div id="contenedor_detail">
                                <div id="detalle_izq">
                                    <img src={food.img} alt="ImagenPOP" id="imagen_detail_modal" ></img>
                                    <div className="extra_item_detalle">
                                        {
                                            extraItem && extraItem ?
                                                <div data-aos="fade-left"
                                                    data-aos-duration="2000">
                                                    <h1 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Bebida</h1>
                                                    <hr />
                                                    <div className="extra_item_detalel_conteiner">
                                                        <img src={extraItem.img} alt={extraItem.name} />
                                                        <div className="extra_item_detalel_conteiner2">
                                                            <h1>{extraItem.name}</h1>
                                                            <h2 className="food__tag--1_card">$ {extraItem.price}</h2>
                                                            <Button onClick={() => removeExtraItem()} color="failure">
                                                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                                                Quitar bebida
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                                :
                                                null
                                        }
                                    </div>
                                </div>
                                <div id="detalle_der">
                                    <div className="descripcion_detalles">
                                        <h1 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Detalles</h1>
                                        <br />
                                        <p>{food.description}</p>
                                        <br />
                                        <PrettyRating value={food.rating} colors={colors.star} />
                                        <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                                            {food.rating.toFixed(2)}
                                        </span>
                                    </div>
                                    {
                                        food.category === "Cervezas" || food.category === "Bebidas sin Alcohol" ?
                                            null
                                            :
                                            <div id="detail_contenedor_labels">
                                                <Dropdown label="Bebidas (opcional)">
                                                    <Dropdown.Header>
                                                        <span className="block text-l">
                                                            Bebidas sin alcohol
                                                        </span>
                                                    </Dropdown.Header>
                                                    {
                                                        categories && categories.map(cat => {
                                                            if (cat.name === "Bebidas sin Alcohol") {
                                                                return (
                                                                    <div>
                                                                        {
                                                                            cat && cat.categoryProducts.map(prod => {
                                                                                if (prod.stock >= 1) {
                                                                                    return (
                                                                                        <button onClick={() => handleExtraItem(prod)}>
                                                                                            <Dropdown.Item>
                                                                                                {prod.name}
                                                                                            </Dropdown.Item>
                                                                                        </button>

                                                                                    )
                                                                                }
                                                                                else {
                                                                                    return null
                                                                                }
                                                                            })
                                                                        }
                                                                    </div>
                                                                )
                                                            }
                                                            return null

                                                        })

                                                    }
                                                    <Dropdown.Divider />
                                                    <Dropdown.Header>
                                                        <span className="block text-l">
                                                            Cervezas
                                                        </span>
                                                    </Dropdown.Header>
                                                    {
                                                        categories && categories.map(cat => {
                                                            if (cat.name === "Cervezas") {
                                                                return (
                                                                    <div>
                                                                        {
                                                                            cat && cat.categoryProducts.map(prod => {
                                                                                if (prod.stock >= 1) {
                                                                                    return (
                                                                                        <button onClick={() => handleExtraItem(prod)}>
                                                                                            <Dropdown.Item>
                                                                                                {prod.name}
                                                                                            </Dropdown.Item>
                                                                                        </button>

                                                                                    )
                                                                                }
                                                                                else {
                                                                                    return null
                                                                                }
                                                                            })
                                                                        }
                                                                    </div>
                                                                )
                                                            }
                                                            return null
                                                        })
                                                    }
                                                </Dropdown>
                                            </div>
                                    }
                                    <Button onClick={() => setOpinionesModal(true)}> Ver calificaciones </Button>
                                    <div className="comentarios_detalle">
                                        <h2>Comentarios</h2>
                                        <textarea
                                            name='comentarios'
                                            placeholder="Algo que nos quieras comentar sobre el pedido ?"
                                            rows={5} cols={40}
                                            value={comentario}
                                            onChange={(event) => handleComentario(event)}
                                        />
                                    </div>
                                    <div className="precio_comida_detalle">
                                        {
                                            food.off ?
                                                <div>
                                                    {
                                                        extra ?
                                                            <div>
                                                                <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-decoration-line: line-through">${food.price}</h2>
                                                                <h2 className="food__tag--2_card">% {food.off} Off</h2>
                                                                <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Adicional (Bebida): ${extra}</h2>
                                                                <br />
                                                                <h2 className="food__tag--1_card">Total $ {(food.price - ((food.price * food.off) / 100)) + extra}</h2>
                                                            </div>
                                                            :
                                                            <div>
                                                                <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-decoration-line: line-through">${food.price}</h2>
                                                                <h2 className="food__tag--2_card">% {food.off} Off</h2>
                                                                <br />
                                                                <h2 className="food__tag--1_card">Total $ {food.price - ((food.price * food.off) / 100)}</h2>
                                                            </div>
                                                    }
                                                </div>
                                                :
                                                <div>
                                                    {
                                                        extra ?
                                                            <div>
                                                                <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">${food.price}</h2>
                                                                <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Adicional (Bebida): ${extra}</h2>
                                                                <br />
                                                                <h2 className="food__tag--1_card">Total $ {food.price + extra}</h2>
                                                            </div>
                                                            :
                                                            <h2 className="food__tag--1_card">Total $ {food.price}</h2>
                                                    }
                                                </div>
                                        }
                                    </div>
                                    <Button id="buttons_detail_buy" onClick={() => addFoodToCart()}>
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                        Agregar al carrito
                                    </Button>
                                </div>
                            </div>
                        </Modal.Body>
                    </Modal>
                    :
                    <h3>Cargando</h3>
            }

        </div >
    )
}
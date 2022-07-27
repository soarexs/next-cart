import { useEffect, useState, useRef } from 'react'
import moment from 'moment'
import axios from 'axios'
import { AdditionalInformations, ContainerImg, ContainerRequests, ContainerTitle, Data, Request, RequestsContainer, Triangle } from './styles'

interface IOrder {
    protocolo: string
    apresentante: string
    tipo: string
    imagem: string
    entrada: number
    vencimento: number
}

export function Requests() {
    const [orders, setOrders] = useState<IOrder[]>([])
    const unixToMomemt = (unix: number) => moment(unix * 1000)
    const unix2Date = (unix: number) => new Date(unix * 1000).toLocaleDateString()

    const calculateDiff = (order: IOrder) => {
        const entry = unixToMomemt(order.entrada)
        const dueDate = unixToMomemt(order.vencimento)
        const diff = dueDate.diff(entry, 'days')
        return diff
    }

    useEffect(() => {
        axios.get<IOrder[]>('/api/orders')
            .then((res) => {
                const { data } = res
                const orders = data.sort((firstOrder: IOrder, secondOrder: IOrder) => {
                    const first = calculateDiff(firstOrder)
                    const second = calculateDiff(secondOrder)
                    return first - second
                })
                setOrders(orders)
            })
    }, [])

    return (
        <RequestsContainer>
            <ContainerTitle>
                <h1>Pedidos</h1>
                <span>últimos pedidos</span>
            </ContainerTitle>
            <ContainerRequests>
                {
                    orders.map((order: IOrder) => {
                        return (
                            <Request>
                                <ContainerImg>
                                    <img src={order.imagem} alt="" />
                                </ContainerImg>
                                <Data>
                                    <b>{order.protocolo}</b>
                                    <span>{unix2Date(order.entrada)}</span>
                                    <span>{unix2Date(order.vencimento)}</span>
                                </Data>
                                <AdditionalInformations>
                                    <Triangle></Triangle>
                                    <div>
                                        <b>Informações Adicionais</b>
                                    </div>
                                    <span>{order.apresentante}</span>
                                    <span>{order.tipo}</span>
                                </AdditionalInformations>
                            </Request>
                        )
                    })
                }
            </ContainerRequests>
        </RequestsContainer >
    )
}
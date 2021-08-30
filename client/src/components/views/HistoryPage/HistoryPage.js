import React from 'react'

function HistoryPage(props) {

    return (
        <div style={{ width: '80%', margin: '3rem auto' }}>
            <div style={{ textAlign: 'center' }}>
                <h1>Lịch sử giao dịch</h1>
            </div>
            <br />

            <table>
                <thead>
                    <tr style={{ textAlign: 'center' }}>
                        <th>Mã đơn hàng</th>
                        <th>Số lượng</th>
                        <th>Giá</th>
                        <th>Ngày thanh toán</th>
                    </tr>
                </thead>

                <tbody>

                    {props.user.userData && props.user.userData.history &&
                        props.user.userData.history.map(item => (
                            <tr key={item.id}>
                                <td style={{ textAlign: 'center' }}>{item.id}</td>
                                
                                <td style={{ textAlign: 'center' }}>{item.quantity}</td>
                                <td style={{ textAlign: 'center' }}>{item.price} VNĐ</td>
                                <td style={{ textAlign: 'center' }}>{item.dateOfPurchase}</td>
                            </tr>
                        ))}


                </tbody>
            </table>
        </div>
    )
}

export default HistoryPage

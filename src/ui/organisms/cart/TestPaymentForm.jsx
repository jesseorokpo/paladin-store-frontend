import React from 'react';
import { PaystackButton } from 'react-paystack';
import { Box } from '@mantine/core';
import { addTransaction } from '../../../firebase-init';

const pub_key = process.env.FLW_PUB_KEY

const config = {
    reference: (new Date()).getTime().toString(),
    email: "user@example.com",
    amount: 20000 * 100,
    publicKey: pub_key
};

export default function PayWithPaystack(props) {
    const handlePaystackSuccessAction = (reference) => {
        console.log(reference);
    };

    const handlePaystackCloseAction = () => {
        console.log('closed');
    };

    const componentProps = {
        ...config,
        text: 'Paystack Button Implementation',
        onSuccess: (reference) => {
            addTransaction({
                amount: props.amount,
                userId: props.userId,
                email: props.email,
                reference: props.reference,
            })
            handlePaystackSuccessAction(reference);
            alert("Your payment was successful");
            console.log(reference);
        },
        onClose: handlePaystackCloseAction,
    };

    return (
        <Box>
            <PaystackButton {...componentProps} />
        </Box>
    );
}


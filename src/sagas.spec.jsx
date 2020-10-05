import {loginSaga, paymentSaga} from 'sagas.js'
import { recordSaga } from "recordSaga.js";
import { postLoginInfo, postCardInfo, setCardData } from 'store.js';

jest.mock("sagas.js", () => ({
    postLoginRequest: jest.fn(() => ({success: true, token: 'AUTH_TOKEN'}))
}))

describe('testing loginSaga', () => {
    test('login through api', async () => {
        const dispatched = await recordSaga(
            loginSaga,
            postLoginInfo({email: 'testEmail', password: 'testPassword'})
        )
        expect(dispatched).toEqual([
            {
                type: "POST_LOGIN_INFO"
            }
        ])
    });
});

jest.mock("sagas.js", () => ({
    postCardRequest: jest.fn(() => ({success: true}))
}))

describe('testing paymentSaga', () => {
    const gen = paymentSaga({cardNumber: "0000 0000 0000 0000", expiryDate: "", cardName: "", cvc: "", token: AUTH_TOKEN});

    test('takes POST_CARD_INFO action', () => {
        expect(gen.next().value).toEqual(takeEvery(postCardInfo.toString()))
    })

    test('dispatches an action to update card data', () => {
        expect(gen.next().value).toEqual(put(setCardData({cardNumber: "0000 0000 0000 0000", expiryDate: "", cardName: "", cvc: ""})))
    })
});
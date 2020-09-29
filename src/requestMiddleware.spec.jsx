import React from 'react';
import {requestMiddleware} from './requestMiddleware.js';
import {postRegisterInfo} from 'store.js';

describe("requestMiddleware", () => {
    describe("#registerInfo", () => {
        test("register through api", async () => {
            const dispatch = jest.fn();

            await requestMiddleware({dispatch})()(
                postRegisterInfo({ 
                    email: 'test_email', 
                    password: 'test_password', 
                    name: 'test_name', 
                    surname: 'test_surname', 
                })                
            );

            expect(dispatch).toBeCalledWith({type: "REGISTER_INFO_RECEIVED"})
        })
    })
})
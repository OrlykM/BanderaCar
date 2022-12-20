import React from 'react';
import CardBalanceForm from "../components/CardBalancePageComponents";
import LoginForm from "../components/LoginPageComponents/LoginForm";

const CardBalance = () => {
    return (
        <section className="vh-100 bg-image" style={{
            // background: "#071843"

            background: "radial-gradient(circle, #2e59af, #071843)"
        }}>
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{background: "#020001",borderRadius:"15px"}}>
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5"
                                        style={{color:"#b4dbe9"}}>
                                        Top up balance
                                    </h2>
                                    <CardBalanceForm/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    );
};

export default CardBalance;
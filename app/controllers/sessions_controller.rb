class SessionsController < ApplicationController
         
    skip_before_action :authorize, only: [:create, :new, :omni]   

    def create
            user = User.find_by(email: params[:email])         
        if user&.valid_password?(params[:password])
            session[:user_id] ||= user.id
            render json: user, status: :created      
        else
            render json: {errors: ["Invlaid Email or password"]}, status: :unauthorized         
        end      
    end

    def destroy         
        @current_user&.authentication_token = nil
        @current_user.save
        session.delete :user_id
        head :no_content     
    end
    
end
class UsersController < ApplicationController

    skip_before_action :authorize, only: [:create]
    
    def index
        users = User.all 
        render json: users, status: :ok
    end
    
    def show
        render json: @current_user, status: :ok
    end
    
    def create
        user = User.create!(user_params).authenticate(params[:password])
        render json: user, status: :created
    end

    def update
        user = User.find(params[:id])
        updated_user = user.update!(user_params)
        render json: updated_user, status: :accepted
    end
    
    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content
    end
    
    private
    
    def user_params
        params.permit(:email , :auth_level, :password_digest , :password_confirmation)
    end

end

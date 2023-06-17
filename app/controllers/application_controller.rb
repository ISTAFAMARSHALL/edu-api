class ApplicationController < ActionController::API

    include ActionController::Cookies
    
    before_action :authorize
    # before_action :authenticate_user!

    acts_as_token_authentication_handler_for User, fallback: :none
    
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

    private

    def record_not_found
        render json: {error: "Record not found"}, status: :not_found
    end

    def record_invalid(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def authorize
        @current_user = User.find_by(id: session[:user_id])
        render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
    end

end

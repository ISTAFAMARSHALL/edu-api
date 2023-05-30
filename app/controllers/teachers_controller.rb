class TeachersController < ApplicationController

    def index
        teachers = teacher.all
        render json: teachers, status: :ok
    end
    
    def show
        teacher = teacher.find(params[:id])
        render json: teacher, status: :ok
    end
    
    def create
        teacher = teacher.create!(teacher_params)
        render json: teacher, status: :created
    end
    
    def update
        teacher = teacher.find(params[:id])
        updated_teacher = teacher.update!(teacher_params)
        render json: teacher, status: :accepted
    end
    
    def destroy
        teacher = teacher.find(params[:id])
        teacher.destroy
        render json: teacher
    end
    
    private
    
    def teacher_params
        params.permit(:name, :address, :subject, :email, :birthday, :school_id, :auth_level)
    end
    
end

class TeachersController < ApplicationController

    def index
        teachers = Teacher.all
        render json: teachers, status: :ok
    end
    
    def show
        teacher = Teacher.find(params[:id])
        render json: teacher, status: :ok
    end
    
    def create
        teacher = Teacher.create!(teacher_params)
        render json: teacher, status: :created
    end
    
    def update
        teacher = Teacher.find(params[:id])
        updated_teacher = teacher.update!(teacher_params)
        render json: teacher, status: :accepted
    end
    
    def destroy
        teacher = Teacher.find(params[:id])
        teacher.destroy
        head :no_content
    end
    
    private
    
    def teacher_params
        params.permit(:name, :address, :subject, :email, :birthday, :school_id, :auth_level)
    end
    
end

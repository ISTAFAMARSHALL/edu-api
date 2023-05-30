class StudentsController < ApplicationController
    
    def index
        students = student.all
        render json: students, status: :ok
    end
    
    def show
        student = student.find(params[:id])
        render json: student, status: :ok
    end
    
    def create
        student = student.create!(student_params)
        render json: student, status: :created
    end
    
    def update
        student = student.find(params[:id])
        updated_student = student.update!(student_params)
        render json: student, status: :accepted
    end
    
    def destroy
        student = student.find(params[:id])
        student.destroy
        render json: student
    end
    
    private
    
    def student_params
        params.permit(:name, :address, :email, :birthday, :school_id, :auth_level)
    end

end

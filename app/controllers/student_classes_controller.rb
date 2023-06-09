class StudentClassesController < ApplicationController

    def index
        student_class = StudentClass.all
        render json: student_class, status: :ok
    end
    
    def show
        student_class = StudentClass.find(params[:id])
        render json: student_class, status: :ok
    end
    
    def create
        student_class = StudentClass.create!(class_params)
        render json: student_class, status: :created
    end
    
    def update
        student_class = StudentClass.find(params[:id])
        updated_student_class = student_class.update!(class_params)
        render json: student_class, status: :accepted
    end
    
    def destroy
        student_class = StudentClass.find(params[:id])
        student_class.destroy
        head :no_content
    end
    
    private
    
    def class_params
        params.permit(:name, :student_id, :teacher_id)
    end

end

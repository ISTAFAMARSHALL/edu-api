class StudentClassesController < ApplicationController

    def index
        student_classes = student_class.all
        render json: student_classes, status: :ok
    end
    
    def show
        student_class = student_class.find(params[:id])
        render json: student_class, status: :ok
    end
    
    def create
        student_class = student_class.create!(class_params)
        render json: student_class, status: :created
    end
    
    def update
        student_class = student_class.find(params[:id])
        updated_student_class = student_class.update!(class_params)
        render json: student_class, status: :accepted
    end
    
    def destroy
        student_class = student_class.find(params[:id])
        student_class.destroy
        render json: student_class
    end
    
    private
    
    def class_params
        params.permit(:name, :student_id, :teacher_id)
    end

end

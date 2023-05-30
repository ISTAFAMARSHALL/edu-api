class SchoolsController < ApplicationController
    
    def index
        schools = school.all
        render json: schools, status: :ok
    end
    
    def show
        school = school.find(params[:id])
        render json: school, status: :ok
    end
    
    def create
        school = school.create!(school_params)
        render json: school, status: :created
    end
    
    def update
        school = school.find(params[:id])
        updated_school = school.update!(school_params)
        render json: school, status: :accepted
    end
    
    def destroy
        school = school.find(params[:id])
        school.destroy
        render json: school
    end
    
    private
    
    def school_params
        params.permit(:name, :address)
    end

end

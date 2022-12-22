Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :vehicles
      get '/external', to: 'external#show'
    end
  end
end

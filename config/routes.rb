Rails.application.routes.draw do
  scope :api do
    scope :v1 do
      # get "/ordered-prompts", to: "prompts#ordered"
      
      # post "/auth/:provider/callback", to: "sessions#omniauth"

      resources :users, only: [:update, :destroy]
      post "/signup", to: "users#create"
      get "/me", to: "users#show"
      post "/login", to: "sessions#create"
      delete "/logout", to: "sessions#destroy"
      delete "/delete", to: "users#destroy"
      get "/users/:id/stories", to: "users#index"
      
      resources :stories, only: [:index, :update, :create]
      patch "/stories/:id", to: "stories#update"
      get "/prompts/:id/stories", to: "stories#index"
      post "/prompts/:prompt_id/stories", to: "stories#create"
      delete "stories/:id/", to: "stories#destroy"

      resources :prompts, only: [:index, :create]
      get "/prompts/:id", to: "prompts#show"
      post "/prompts", to: "prompts#create"
      get "/search", to: "prompts#search"
      post "/search", to: "prompts#search"
  
        resources :stories
          get "prompts/:id/ordered-stories", to: "prompts#ordered_stories"

      #double-nested route
      # resources :users, do
      #   resources :prompts, do
      #     resources :stories 
      #   end
      # end

     
    end
  end
end

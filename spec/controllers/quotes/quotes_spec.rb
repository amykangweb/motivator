require 'rails_helper'

describe Api::QuotesController do

  before do
    FactoryGirl.build(:motivational).save
    FactoryGirl.build(:funny).save
    FactoryGirl.build(:sad).save
    get :index
  end

  it "returns motivational quotes" do
    expect(response).to be_successful
    data = JSON.parse(response.body)
    content = data["motivational"]
    expect(content[0]["body"]).to have_content("Motivational Quote.")
  end

  it "returns funny quotes" do
    expect(response).to be_successful
    data = JSON.parse(response.body)
    content = data["funny"]
    expect(content[0]["body"]).to have_content("Funny Quote.")
  end

  it "returns sad quotes" do
    expect(response).to be_successful
    data = JSON.parse(response.body)
    content = data["sad"]
    expect(content[0]["body"]).to have_content("Sad Quote.")
  end
end

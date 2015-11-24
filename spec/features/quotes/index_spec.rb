require 'rails_helper'

describe "Index" do
  before do
    @quote = FactoryGirl.build(:motivational)
    @quote.save
  end

  it "shows motivational quote", js: true do
    visit '/quotes'
    expect(page).to have_content(@quote.body)
  end
end
